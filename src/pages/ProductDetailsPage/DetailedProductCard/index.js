import {
  DetailedCardContentWrapper,
  SecondHalfWrapper,
  ProductDescription,
  ImageWrapper,
  ProductImage
} from './DetailedProductCard.styled'
import ItemPurchaseButton from 'components/ItemPurchaseButton'
import PriceAndInstallment from 'components/PriceAndInstallment'

export default function DetailedProductCard ({ itemData }) {
  return (
    <DetailedCardContentWrapper>
      <ImageWrapper>
        <ProductImage src={itemData.image} alt='Product image' />
      </ImageWrapper>
      <SecondHalfWrapper>
        <ProductDescription>{itemData.description}</ProductDescription>
        <PriceAndInstallment price={itemData.price} />
        <ItemPurchaseButton itemData={itemData} />
      </SecondHalfWrapper>
    </DetailedCardContentWrapper>
  )
}
