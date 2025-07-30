const authorName: string = "Lim, A. J."

const isLastItem = (array: string[], index: number) => {
  return index === array.length - 1;
}

const isTheOnlyItem = (array: string[]) => {
  return array.length === 1;
}

const hasMoreAuthor = (array: string[], index: number) => {
  return index < array.length - 1;
}

const isSecondLastItem = (array: string[], index: number) => {
  return index === array.length - 2;
}

export const constructAuthorsString = (author: string, array: string[], index: number) => {
  return (<>
    {isLastItem(array, index) && !isTheOnlyItem(array) && <span> & </span>}
    {author.includes(authorName) ? <span className="font-bold">{author}</span> : <span>{author}</span>}
    {hasMoreAuthor(array, index) && !isSecondLastItem(array, index) && <span>, </span>}
  </>)
}