import { 
  CardWrapper, 
  Title, 
  ProductImage 
} from "./ProductCard.styled";
import ItemPurchaseButton from "components/ItemPurchaseButton";
import PriceAndInstallment from "components/PriceAndInstallment";

export default function ProductCard({ itemData }) {
  return (
    <CardWrapper>
      <ProductImage src={itemData.image} alt="Product image" />
      <Title>{itemData.name}</Title>
      <PriceAndInstallment price={itemData.price}/>
      <ItemPurchaseButton itemData={itemData} />
    </CardWrapper>
  );
}
