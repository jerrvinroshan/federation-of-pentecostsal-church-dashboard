import { Field } from "formik";
import { FormCustomSelectField, FormCustomTextField } from "./FormCustomField";
import data from "../../../data/data.json";

export const ChurchDetails = ({ values, handleChange, handleSelectChange }) => {
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
        <h2>Church Details</h2>
        <div
          style={{
            display: "flex",
            gap: "40px",
            flexWrap: "wrap",
            marginTop: "36px",
          }}
        >
          <div>
            <Field
              label="Church Name"
              name="churchName"
              component={FormCustomTextField}
              value={values.churchName}
              onChange={handleChange}
            />
            {/* {errors.churchName && (
              <div className="error">{errors.churchName}</div>
            )} */}
          </div>
          <div>
            <Field
              label="Door No"
              name="doorNo"
              component={FormCustomTextField}
              value={values.doorNo}
              onChange={handleChange}
            />
            {/* {errors.doorNo && <div className="error">{errors.doorNo}</div>} */}
          </div>
          <div>
            <Field
              label="Street Name"
              name="streetName"
              component={FormCustomTextField}
              value={values.streetName}
              onChange={handleChange}
            />
            {/* {errors.streetName && (
              <div className="error">{errors.streetName}</div>
            )} */}
          </div>
          <div>
            <Field
              label="Panchayat"
              name="panchayat"
              component={FormCustomTextField}
              value={values.panchayat}
              onChange={handleChange}
            />
            {/* {errors.panchayat && (
              <div className="error">{errors.panchayat}</div>
            )} */}
          </div>
          <div>
            <Field
              label="District"
              name="district"
              component={FormCustomSelectField}
              option={districts}
              onChange={(val) => handleSelectChange("district", val)}
            />
            {/* {errors.district && <div className="error">{errors.district}</div>} */}
          </div>
          <div>
            <Field
              label="Thaluk"
              name="thaluk"
              component={FormCustomSelectField}
              option={thaluk(values.district)}
              onChange={(val) => handleSelectChange("thaluk", val)}
            />
            {/* {errors.thaluk && <div className="error">{errors.thaluk}</div>} */}
          </div>
          <div>
            <Field
              label="Village"
              name="village"
              component={FormCustomSelectField}
              option={village(values.district)}
              onChange={(val) => handleSelectChange("village", val)}
            />
            {/* {errors.village && <div className="error">{errors.village}</div>} */}
          </div>
          <div>
            <Field
              label="Assembly Constituency"
              name="assemblyConstituency"
              component={FormCustomTextField}
              value={values.assemblyConstituency}
              onChange={handleChange}
            />
            {/* {errors.assemblyConstituency && (
              <div className="error">{errors.assemblyConstituency}</div>
            )} */}
          </div>
          <div>
            <Field
              label="Parliament Constituency"
              name="parliamentConstituency"
              component={FormCustomTextField}
              value={values.parliamentConstituency}
              onChange={handleChange}
            />
            {/* {errors.parliamentConstituency && (
              <div className="error">{errors.parliamentConstituency}</div>
            )} */}
          </div>
          <div>
            <Field
              label="Local Police Station"
              name="localPoliceStation"
              component={FormCustomTextField}
              value={values.localPoliceStation}
              onChange={handleChange}
            />
            {/* {errors.localPoliceStation && (
              <div className="error">{errors.localPoliceStation}</div>
            )} */}
          </div>
          <div>
            <Field
              label="Church Website"
              name="churchWebsite"
              component={FormCustomTextField}
              value={values.churchWebsite}
              onChange={handleChange}
            />
            {/* {errors.churchWebsite && (
              <div className="error">{errors.churchWebsite}</div>
            )} */}
          </div>
          <div>
            <Field
              label="Independent/Denomination"
              name="independentDenomination"
              component={FormCustomSelectField}
              option={[
                { label: "Independent", value: "Independent" },
                { label: "Denomination", value: "Denomination" },
              ]}
              onChange={(val) =>
                handleSelectChange("independentDenomination", val)
              }
            />
            {/* {errors.independentDenomination && (
              <div className="error">{errors.independentDenomination}</div>
            )} */}
          </div>
        </div>
      </div>
      {values.independentDenomination === "Denomination" && (
        <div style={{ marginTop: "32px" }}>
          <h2>Trust / Society</h2>
          <div
            style={{
              display: "flex",
              gap: "40px",
              flexWrap: "wrap",
              marginTop: "36px",
            }}
          >
            <div>
              <Field
                label="Name of Denomination"
                name="nameOfDenomination"
                component={FormCustomTextField}
                value={values.nameOfDenomination}
                onChange={handleChange}
              />
              {/* {errors.nameOfDenomination && (
              <div className="error">{errors.nameOfDenomination}</div>
            )} */}
            </div>
            <div>
              <Field
                label="President of Denomination"
                name="presidentDenomination"
                component={FormCustomTextField}
                value={values.presidentDenomination}
                onChange={handleChange}
              />
              {/* {errors.presidentDenomination && (
              <div className="error">{errors.presidentDenomination}</div>
            )} */}
            </div>
            <div>
              <Field
                label="Head Quarters"
                name="headQuarters"
                component={FormCustomTextField}
                value={values.headQuarters}
                onChange={handleChange}
              />
              {/* {errors.headQuarters && (
              <div className="error">{errors.headQuarters}</div>
            )} */}
            </div>
            <div>
              <Field
                label="Govt. Registration No"
                name="registrationNo"
                component={FormCustomTextField}
                value={values.registrationNo}
                onChange={handleChange}
              />
              {/* {errors.registrationNo && (
              <div className="error">{errors.registrationNo}</div>
            )} */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
