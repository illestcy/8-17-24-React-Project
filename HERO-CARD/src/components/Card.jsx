import tb from "./jpgs/terrorblade.png"
import tb2 from "./jpgs/morphling.png"
import tb3 from "./jpgs/weaver.png"
import tb4 from "./jpgs/phantom_assassin.png"



export default function Card (props) {
    return (
        <>
        <section className="flex space-x-2 justify-center items-center w-screen h-screen bg-neutral-900">
            <div className="hover:bg-black p-5 bg-neutral-700 text-white rounded-lg">
            <img src={tb} className="w-20 h-20" />
            <h1>Terrorblade</h1>
            <p>{props.description}</p>
            </div>
            <div className="hover:bg-black p-5 bg-neutral-700 text-white rounded-lg">
            <img src={tb2} className="w-20 h-20" />
            <h1>Morphling</h1>
            <p>{props.description}</p>
            </div>
            <div className="hover:bg-black p-5 bg-neutral-700 text-white rounded-lg">
            <img src={tb3} className="w-20 h-20" />
            <h1>Weaver</h1>
            <p>{props.description}</p>
            </div>
            <div className="hover:bg-black p-5 bg-neutral-700 text-white rounded-lg">
            <img src={tb4} className="w-20 h-20" />
            <h1>PA</h1>
            <p>{props.description}</p>
            </div>
        </section>
        
        
        
        
        
        
        </>
    );

}