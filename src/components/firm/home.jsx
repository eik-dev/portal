import { useContext } from "react";
import { Context } from '../../ContextProvider'

export default function Home() {
    let {User} = useContext(Context)
    let role = User[0].role
    return(
        <>
        <h1 className="text-2xl">{`Home page for ${role} user`}</h1>
        </>
    )
}