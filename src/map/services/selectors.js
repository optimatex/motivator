export const getMapsList = ({ maps }) => maps.list.data.items;

export const getIsLoadingList = ({ maps }) => maps.list.isLoading;

export const getHasError = ({ maps }) => maps.list.error !== '';

export const getError = ({ maps }) => maps.list.error;
