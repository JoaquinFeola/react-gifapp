import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./index";

export const GiftGrid = ({ category }) => {
    
    const { images, isLoading } = useFetchGifs( category )
    console.log(isLoading);


  return (
    <>
        <h3>{category}</h3>
        {
          isLoading && (<h2 className="text-center">Cargando...</h2>)
        }
        <div className="card-grid">
            {
              images.map( (gifData) => (
                  <GifItem 
                    key={gifData.id}
                    {...gifData}
                  />
              ))
            }

        </div>
    </>
    );
};
