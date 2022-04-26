export default function Message(props) {
    let items = props.data
    if (items.added === 0) {
        return <></>
    } else if(items.added === 1) {
        return <>You have {items.added} {items.name} in your cart</>
    } else {
        return <>You have {items.added} {items.name}s in your cart</>        
    }
}