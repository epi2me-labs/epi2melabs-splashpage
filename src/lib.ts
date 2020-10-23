import { IDocumentManager } from '@jupyterlab/docmanager';

import { ISettingRegistry } from '@jupyterlab/settingregistry';

import { ITrackedNotebook, NotebookAction } from './types';

const IPYNB = '.ipynb'


export const actionCallbacks = {
    [NotebookAction.clone]: async (e: string, docTrack: IDocumentManager, settings: ISettingRegistry.ISettings) => {
        await docTrack.copy(e, settings.get('working_dir').composite as string).then(e => {
          docTrack.open(e.path)
        })
    },
    [NotebookAction.open]: (e: string, docTrack: IDocumentManager) => {
        docTrack.open(e)
    }
}


export const getNotebooks = async (
  path: string, 
  docTrack: IDocumentManager, 
): Promise<ITrackedNotebook[]> => {
  return await docTrack.services.contents.get(path).then(contents => {
    return contents.content
    .filter((Item: any) => Item.path.endsWith(IPYNB))
    .map((Item: any): ITrackedNotebook => {
      return {
        name: Item.name, 
        path: Item.path,
        last_modified: Item.last_modified
      }
    });
  });
}