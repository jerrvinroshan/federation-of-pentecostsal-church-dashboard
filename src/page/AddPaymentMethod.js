import { BillingHistoryTable } from "../features/dashboard/component/configuration/BillingHistoryTable";
import { PaymentCard } from "../features/dashboard/component/configuration/PaymentCard";

const AddPaymentMethod = () => {
  return (
    <div>
      <h1>Add Payment Method</h1>
      <div
        style={{
          marginTop: "36px",
        }}
      >
        <PaymentCard />
      </div>
      <div style={{marginTop:'32px'}}>
        <BillingHistoryTable />
      </div>
    </div>
  );
};
export default AddPaymentMethod;
