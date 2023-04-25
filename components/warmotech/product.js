export default function Product({reverse = false, title, children, photo}) {

    if(reverse){
        return (
            <>
              <div className='flex flex-column flex-row-l justify-center w-80 mt4 mb5'>
                    <div className='w-40-l flex justify-center items-center  mt3 mb4 mb0-l mt0-l'>
                        <div className='w-50'>
                            <img src={"/img/"+photo}></img>    
                        </div>
                    </div>
                    <div className='w-40-l flex justify-center'>
                        <div className='w-80-l'>
                            <h3 className='b f2 gold tc tl-l mt0'>{title}</h3>
                            <p className='arctic tc tl-l'>
                                {children}
                            </p>
                        </div>
                    </div>

                </div>
            </>
        )
    }else {
        return (
            <>
            <div className='flex flex-column-reverse flex-row-l justify-center w-80 mt4-l mb4-l'>
                <div className='w-40-l flex justify-center'>
                    <div className='w-80-l'>
                        <h3 className='b f2 gold tc tl-l mt0'>{title}</h3>
                        <p className='arctic tc tl-l'>
                            {children}
                        </p>
                    </div>
                </div>

                <div className='w-40-l flex justify-center items-center mt3 mb4 mb0-l mt0-l'>
                    <div className='w-50'>
                        <img src={"/img/"+photo}></img>    
                    </div>
                </div>
            </div>
            </>
        )
    }

  }
