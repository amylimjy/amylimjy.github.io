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
    {/* 
    The logic here is if authorName name is the last item in the list, 
    AND
    it is not the only one in the list, we add an & before the name 
     */}
    {isLastItem(array, index) && !isTheOnlyItem(array) && <span> & </span>}

    {/* if the author name matches authorName, we bold it */}
    {author.includes(authorName) ? <span className="font-bold">{author}</span> : <span>{author}</span>}

    {/* 
    The logic here is if there are more authors while iterating
    AND
    the name is not the second last author, we added a comma.
    (if there are more authors and the name IS the second last, we don't add commas)
     */}
    {hasMoreAuthor(array, index) && !isSecondLastItem(array, index) && <span>, </span>}
  </>)
}