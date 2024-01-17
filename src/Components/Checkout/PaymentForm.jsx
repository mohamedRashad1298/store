import { Typography , Divider , Button } from "@mui/material"
import {Elements , ElementsConsumer , CardElement} from "@stripe/react-stripe-js"
import {loadStripe} from '@stripe/stripe-js'
import Reviews from "./Reviews"
import { useSelector ,useDispatch } from "react-redux";
import {ProductAction} from '../../utils/store'

const stripePromise = loadStripe('pk_test_51OG1kzDL1Hf0H1sVXCU7xPDCem4GiHlUtFe9kNzTbgkDfriPdLphqgUzLqYEABj3fapDhwJI1u706K1iWurktMI500z495EWAt')

const PaymentForm = ({ back ,nextStep }) => {

const dispatch = useDispatch()

const totalPrice = useSelector(state=>state.totalPrice)

const handleData = async(e,stripe , elements)=>{
  e.preventDefault()
  // const {error , paymentMethod} = await stripe.createPaymentMethod({type:'card' , card:CardElement})

// if(error){
//   console.log(error)
// }else{
//   const orderData = {
//     line_items: basket,
//     customer: { firstname: data.firstName, lastname: data.lastName, email: data.email },
//     shipping: { name: 'International', street: data.address, town_city: data.city, county_state: data.shippingSubdivision, postal_zip_code: data.zip, country: data.shippingCountry },
//     fulfillment: { shipping_method: data.shippingOption },
//     payment: {
//       gateway: 'stripe',
//       stripe: {
//         payment_method_id: paymentMethod.id,
//       },
//     },
//   };
// }
dispatch(ProductAction.emaptyBasket())
  nextStep();

}

  return (
    <>
      <Reviews/> 
      <Divider/>
      <Typography varient="h6" gutterBottom style={{margin:"20px 0"}}>Payment Method</Typography>
      <Elements stripe={stripePromise}>
      <ElementsConsumer>{({ elements, stripe }) => (
          <form onSubmit={(e)=>handleData(e,stripe,elements)}>
            <CardElement />
            <br /> <br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="outlined" onClick={back}>Back</Button>
              <Button type="submit" variant="contained"color="primary">
                Pay ${totalPrice}
              </Button>
            </div>
          </form>
           )}
           </ElementsConsumer>
</Elements>
    </>
  )
}

export default PaymentForm
