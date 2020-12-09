
export const catchError = (
  err: Record<string, unknown>,
  source = '{Not specified}'
): void => {
  console.info('typeof err', typeof err);
  console.error(`Error in ${source} request function:`, err);
};
