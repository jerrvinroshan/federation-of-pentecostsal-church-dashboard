import dayjs from "dayjs";
import {
  FormCustomDatePickerField,
  FormCustomSelectField,
  FormCustomTextField,
} from "./FormCustomField";
import { Field } from "formik";
import data from "../../../data/data.json"

export const ChurchProperty = ({ values, handleChange,handleDateChange, handleSelectChange }) => {
  const stateNames = ["Tamil Nadu", "Kerala"];

  const selectedStates = data.filter((stateObj) =>
    stateNames.includes(stateObj.state)
  );

  const districts = selectedStates.flatMap((stateObj) =>
    stateObj.districts.map((district) => ({
      label: district.district,
      value: district.district,
    }))
  );

  const thaluk = (district) => {
    const districtObj = data
      .flatMap((state) => state.districts)
      .find((item) => item.district === district);

    return districtObj
      ? districtObj.subDistricts.map((subDistrictObj) => ({
          label: subDistrictObj.subDistrict,
          value: subDistrictObj.subDistrict,
        }))
      : [];
  };

  const village = (district) => {
    const districtObj = data
      .flatMap((state) => state.districts)
      .find((item) => item.district === district);

    return districtObj
      ? districtObj.subDistricts.flatMap((subDistrictObj) =>
          subDistrictObj.villages.map((village) => ({
            label: village,
            value: village,
          }))
        )
      : [];
  };

  return (
    <div>
      <div>
        <h3>Church Property Detail</h3>
        <div style={{ display: "flex", marginTop: "28px" }}>
          <div>
            <h4>Own Property</h4>
            <div
              style={{
                display: "flex",
                gap: "40px",
                rowGap: "28px",
                flexWrap: "wrap",
                marginTop: "32px",
              }}
            >
              <div>
                <Field
                  label="Owner Name"
                  name="ownerName"
                  component={FormCustomTextField}
                  value={values.ownerName}
                  onChange={handleChange}
                />
                {/* {errors.ownerName && (
                  <div className="error">{errors.ownerName}</div>
                )} */}
              </div>
              <div>
                <Field
                  label="Register Date"
                  name="registerDate"
                  component={FormCustomDatePickerField}
                  value={dayjs(values.registerDate)}
                  onChange={(val) => handleDateChange("registerDate", val)}
                  format="DD/MM/YYYY"
                />
                {/* {errors.registerDate && (
                  <div className="error">{errors.registerDate}</div>
                )} */}
              </div>
              <div>
                <Field
                  label="Any Legal Issues"
                  name="ownLegalIssues"
                  component={FormCustomTextField}
                  value={values.ownLegalIssues}
                  onChange={handleChange}
                />
                {/* {errors.ownLegalIssues && (
                  <div className="error">{errors.ownLegalIssues}</div>
                )} */}
              </div>
            </div>
          </div>
          <div>
            <h4>Rental Property</h4>
            <div
              style={{
                display: "flex",
                gap: "40px",
                rowGap: "28px",
                flexWrap: "wrap",
                marginTop: "32px",
              }}
            >
              <div>
                <Field
                  label="Owner Name"
                  name="rentalownerName"
                  component={FormCustomTextField}
                  value={values.rentalownerName}
                  onChange={handleChange}
                />
                {/* {errors.rentalownerName && (
                  <div className="error">{errors.rentalownerName}</div>
                )} */}
              </div>
              <div>
                <Field
                  label="Register Date"
                  name="rentalRegisterDate"
                  component={FormCustomDatePickerField}
                  value={dayjs(values.rentalRegisterDate)}
                  onChange={(val) => handleDateChange("rentalRegisterDate", val)}
                  format="DD/MM/YYYY"
                />
                {/* {errors.rentalRegisterDate && (
                  <div className="error">{errors.rentalRegisterDate}</div>
                )} */}
              </div>
              <div>
                <Field
                  label="Any Legal Issues"
                  name="rentalLegalIssues"
                  component={FormCustomTextField}
                  value={values.rentalLegalIssues}
                  onChange={handleChange}
                />
                {/* {errors.rentalLegalIssues && (
                  <div className="error">{errors.rentalLegalIssues}</div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "36px" }}>
        <h3>Permanent Address / Address for Communication</h3>
        <div
          style={{
            display: "flex",
            columnGap: "40px",
            rowGap: "28px",
            flexWrap: "wrap",
            marginTop: "32px",
          }}
        >
          <div>
            <Field
              label="Church Name"
              name="contactChurchName"
              component={FormCustomTextField}
              value={values.contactChurchName}
              onChange={handleChange}
            />
            {/* {errors.contactChurchName && (
              <div className="error">{errors.contactChurchName}</div>
            )} */}
          </div>
          <div>
            <Field
              label="Door No"
              name="contactDoorNo"
              component={FormCustomTextField}
              value={values.contactDoorNo}
              onChange={handleChange}
            />
            {/* {errors.contactDoorNo && (
              <div className="error">{errors.contactDoorNo}</div>
            )} */}
          </div>
          <div>
            <Field
              label="Street Name"
              name="contactStreetName"
              component={FormCustomTextField}
              value={values.contactStreetName}
              onChange={handleChange}
            />
            {/* {errors.conatStreetName && (
              <div className="error">{errors.conatStreetName}</div>
            )} */}
          </div>
          <div>
            <Field
              label="Panchayat"
              name="contactPanchayat"
              component={FormCustomTextField}
              value={values.contactPanchayat}
              onChange={handleChange}
            />
            {/* {errors.contactPanchayat && (
              <div className="error">{errors.contactPanchayat}</div>
            )} */}
          </div>
          <div>
            <Field
              label="District"
              name="contactDistrict"
              component={FormCustomSelectField}
              option={districts}
              onChange={(val)=>handleSelectChange("contactDistrict",val)}
            />
            {/* {errors.contactDistrict && (
              <div className="error">{errors.contactDistrict}</div>
            )} */}
          </div>
          <div>
            <Field
              label="Thaluk"
              name="contactThaluk"
              component={FormCustomSelectField}
              option={thaluk(values.contactDistrict)}
              onChange={(val)=>handleSelectChange("contactThaluk",val)}
            />
            {/* {errors.contactThaluk && (
              <div className="error">{errors.contactThaluk}</div>
            )} */}
          </div>
          <div>
            <Field
              label="Village"
              name="contactVillage"
              component={FormCustomSelectField}
              option={village(values.contactDistrict)}
              onChange={(val)=>handleSelectChange("contactVillage",val)}
            />
            {/* {errors.contactVillage && (
              <div className="error">{errors.contactVillage}</div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};
