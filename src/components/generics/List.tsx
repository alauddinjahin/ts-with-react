type ListProps<T> = {
  items: T[]
  onClick: (value: T) => void
}

export const List = <T extends { id: number, fname: string, lname: string }>({
  items,
  onClick
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map(item => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
                {item.fname} {item.lname}
          </div>
        )
      })}
    </div>
  )
}



// type ListProps = {
//     items: string[]
//     onClick: (value: string) => void
// }

// export const List = ({
//     items,
//     onClick
// }: ListProps) => {
//     return (
//         <div>
//             <h2>List of items</h2>
//             {items.map(item => {
//                 return (
//                     <div key={item} onClick={() => onClick(item)}>
//                         {item}
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }