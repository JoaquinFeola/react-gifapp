import { useState } from "react"
import { AddCategory, GiftGrid } from './components/index';

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch' ]);

  const onAddCategory = (newCategory) => {
      if ( categories.includes(newCategory) ) return;
      setCategories([ newCategory, ...categories]);
  };

  return (
    <>
        <h1>¡Busca tus gifs!</h1>
        
        <AddCategory 
          onNewCategory={ (event) => onAddCategory(event) }
        />
        
        {
          categories.map( ( category ) => (
            <GiftGrid 
              key={category} 
              category={category}
            />
          ))
        }
    </>
  )
}
