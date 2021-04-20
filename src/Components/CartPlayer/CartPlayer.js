import React from 'react';

const CartPlayer = (props) => {
    const playerCart = props.playerCart;
     console.log(playerCart);

    let totalSalary=0;
    for(let i=0;i<playerCart.length;i++) {
        const country =playerCart[i];
        totalSalary= totalSalary+country.salary ;
    }

    // console.log(totalSalary);
// const totalSalary =cartply.reduce((sum,playeradd) => sum + playeradd.salary,0);
// const totalPopulation = cart.reduce( (sum, country) => sum + country.salary, 0)

    return (
        <div>
            
            <p>Total salary: {totalSalary}</p>
          <p>Name: {playerCart.map((pd)=>
          <li>{pd.name}</li>
          )}</p>
         

        </div>
    );
};

export default CartPlayer;