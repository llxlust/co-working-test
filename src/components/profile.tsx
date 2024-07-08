interface IMyProfileProps{
    firstName:string
    lastName:string
    age:number
}
function MyProfile(props:IMyProfileProps){
    return <>
    <div>{props.firstName}</div>
    <div>{props.lastName}</div>
    <div>age:{props.age}</div>
    </>
}

export default MyProfile