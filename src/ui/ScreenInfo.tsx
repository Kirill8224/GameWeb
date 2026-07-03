type ScreenType= {
    id: number,
    image: string
}[]
import '../styles/index.css'
export function Infoimage({Images} : {Images: ScreenType}){
    if (!Images || Images.length === 0) {
        return <p>Скриншоты для этой игры отсутствуют</p>;
    }
    return(Images.map((image)=>{
        return(<div key={image.id}>
        <img className='infoImg' src={image.image} alt="скриншот игры" />
        </div>
        )
    }))
}
