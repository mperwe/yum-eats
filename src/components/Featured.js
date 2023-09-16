import React,{useState} from 'react'

const Featured  = () => {
    const sliders = [
            {
                url: "foodmaterials\food1.jpg"
            },
            
    ]
    const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative'> 
       <div className=' w-full h-full rounded-2xl bg-center bg-cover duration-500'
       style={{backgroundImage: 'url(${sliders}[currentIndex].url})'}}
       />
    </div>
  )
}

export default Featured 

