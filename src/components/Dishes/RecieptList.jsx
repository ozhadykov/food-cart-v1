import Reciept from './Reciept'

function RecieptList({ reciepts }) {
  // console.log(reciepts)
  const recieptsObject = reciepts.map((reciept) => {
    return (
      <Reciept
        key={reciept.id}
        title={reciept.title}
        foodList={reciept.foodList}
        instruction={reciept.instruction}
        imgLink={reciept.imgLink}
        slug={reciept.slug}
      />
    )
  })
  return <div>{recieptsObject}</div>
}

export default RecieptList
