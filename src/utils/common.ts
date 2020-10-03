
export const catchError = (
  err: Record<string, unknown>,
  source = '{Not specified}'
): void => {
  console.log('typeof err', typeof err);
  console.error(`Error in ${source} request function:`, err);
};