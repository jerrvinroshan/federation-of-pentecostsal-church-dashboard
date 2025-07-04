import MoreVertIcon from '@mui/icons-material/MoreVert';

export const PaymentCard = () => {
    return(
        <div className='payment-card__border-container'>
            <div className='payment-card__card-heading'>
                <h2 className='payment-card__heading--h2'>Debit Card</h2>
                <MoreVertIcon />
            </div>
            <div className='payment-card__card-info-container'>
                <h3 className='payment-card__card-info-heading--h3'>**** **** **** 1234</h3>
                <div className='payment-card__card-detail-container'>
                    <div className='payment-card__card-name-container'>
                        <h3 className='payment-card__card-detail-heading--h3'>Name</h3>
                        <p className='payment-card__card-detail-content--p'>Sample</p>
                    </div>
                    <div className='payment-card__card-expiry-container'>
                        <h3 className='payment-card__card-detail-heading--h3'>Expiry Date</h3>
                        <p className='payment-card__card-detail-content--p'>08/26</p>
                    </div>
                </div>
            </div>
        </div>
    )
}