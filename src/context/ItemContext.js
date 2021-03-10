import React from 'react';



const ItemContext = React.createContext({
    name:'',
    price:'',
    description:'',
    imageLink:'',
    id:'',
    // onClickX:''
})

export default ItemContext;