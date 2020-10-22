import { ReactWidget } from '@jupyterlab/apputils';

import { IDocumentManager } from '@jupyterlab/docmanager';

import { getNotebooks, actionCallbacks } from './lib';

import { notebookIcon, LabIcon } from '@jupyterlab/ui-components';

import { ITrackedNotebook, ITrackedNotebookList } from './types';

import React, { useState, useEffect } from 'react';

import { logoSVG } from './asset';

import moment from 'moment';


export const LabsLogo = () => {
  const logoSVGBlob = new Blob([logoSVG], {type: 'image/svg+xml'});
  const url = URL.createObjectURL(logoSVGBlob);

  return (
    <div className="labsLogo">
      <img src={url} alt="The EPI2ME Labs logo" />
    </div>
  )
}


const LauncherHeader = ({}) => (
  <div className="tutorialsLauncherHeader">
    <LabsLogo />
    <h1>Welcome to EPI2ME Labs</h1>
    <p>
      EPI2ME Labs maintains a growing collection of notebooks on a range of
      topics from basic quality control to genome assembly. These are
      free and open to use by anyone. Browse the list below and get started.
    </p>
  </div>
);


const LauncherFooter = ({}) => (
  <div className="tutorialsLauncherFooter">
    <p>@2008 - {moment().year()} Oxford Nanopore Technologies. All rights reserved</p>
  </div>
);


const LauncherTooltip = ({ tooltip }: {tooltip: string}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisible = () => {
    setIsVisible(!isVisible);
  }

  return (
    <button 
      className="launcherTooltip" 
      onClick={handleToggleVisible} 
      onMouseEnter={handleToggleVisible} 
      onMouseLeave={handleToggleVisible}
    >
      <div className="launcherTooltipIcon">?</div>
      {isVisible ? (
        <p>{tooltip}</p>
      ) : ('')}
    </button>
  )
};


const LauncherNotebookListItem = ({
  TrackedNotebook,
  action,
  icon,
}: {
  TrackedNotebook: ITrackedNotebook,
  action: () => void,
  icon: LabIcon,
}) => {
  const { name, last_modified } = TrackedNotebook;

  const handleExtractName = (): string => {
    return name.split('_').join(' ').split('.ipynb').join('')
  }

  const handleFormatUpdated = (): string => {
    return moment(last_modified).format("MMMM Do YYYY, h:mm:ss a")
  }

  return (
    <button onClick={() => action}>
      <div>
        <LabIcon.resolveReact
          icon={notebookIcon}
          className="tutorialIcon"
          tag="span"
          width="100%"
          height="100%"
        />
      </div>
      <div className="tutorialDetails">
        <h3>{handleExtractName()}</h3>
        <p>
          Last modified: {handleFormatUpdated()}
        </p>
      </div>
      <div className="tutorialButton">
        <LabIcon.resolveReact
          icon={icon}
          className="tutorialButtonIcon"
          tag="span"
          width="20px"
          height="20px"
        />
      </div>
    </button>
  )
}


const LauncherNotebookList = ({ 
  TrackedNotebookList,
  docTrack, 
}: {TrackedNotebookList: ITrackedNotebookList, docTrack: IDocumentManager}): JSX.Element => {
  const { path, name, icon, tooltip, action } = TrackedNotebookList;

  const [ notebooks, setNotebooks ] = useState([]);

  const handleUpdateSections = async () => {
    setNotebooks(await getNotebooks(path, docTrack));
  }

  useEffect(() => {
    handleUpdateSections()
    const slotHandleUpdateSections = (e: any) => {
      handleUpdateSections()
    }

    const fileSignal = docTrack.services.contents.fileChanged;
    fileSignal.connect(slotHandleUpdateSections)
    return () => fileSignal.disconnect(slotHandleUpdateSections)
  }, [])

  if (notebooks.length === 0) {
    return (<React.Fragment />)
  }

  return (
    <div className="tutorialsLauncherList">
      <div className="tutorialsLauncherListHeader">
        <h2>{name}</h2>
        <ul className="tutorialsLauncherListHeaderToolbar">
          <li>
            <LauncherTooltip tooltip={tooltip} />
          </li>
        </ul>
      </div>
      <ul className="tutorialsLauncherListGrid">
        {notebooks.map(Item => (
          <li key={Item.path}>
            <LauncherNotebookListItem
              TrackedNotebook={Item}
              icon={icon}
              action={() => actionCallbacks[action](Item.path, docTrack)} 
            />
          </li>
        ))}
      </ul>
    </div>
    )
  };


export class Epi2melabsLauncherWidget extends ReactWidget {

  constructor(docTrack: IDocumentManager, sections: ITrackedNotebookList[]) {
    super();
    this.docTrack = docTrack;
    this.sections = sections;

    this.addClass('jp-ReactWidget');
  }

  render(): JSX.Element {
    return (
      <div className="tutorialsLauncher"> 
        <LauncherHeader />
        {this.sections.map(Item => (
          <LauncherNotebookList
            TrackedNotebookList={Item}
            docTrack={this.docTrack}
          />
        ))}
        <LauncherFooter />
      </div>
    )
  }

  public docTrack: IDocumentManager;
  public sections: ITrackedNotebookList[];
}
