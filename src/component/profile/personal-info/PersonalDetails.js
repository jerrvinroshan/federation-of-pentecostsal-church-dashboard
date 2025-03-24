import { FormCustomSelectField, FormCustomTextField } from "./FormCustomField";
import { Field } from "formik";

export const PersonalDetails = ({ values, handleChange, errors }) => {
  return (
    <div>
      <div>
        <h2>Personal Details</h2>
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
              label="Pastor Name"
              name="pastorName"
              component={FormCustomTextField}
              value={values.pastorName}
              onChange={handleChange}
            />
            {errors.pastorName && (
              <div className="error">{errors.pastorName}</div>
            )}
          </div>
          <div>
            <Field
              label="DOB"
              name="pastorDOB"
              component={FormCustomTextField}
              value={values.pastorDOB}
              onChange={handleChange}
            />
            {errors.pastorDOB && (
              <div className="error">{errors.pastorDOB}</div>
            )}
          </div>
          <div>
            <Field
              label="Father Name"
              name="fatherName"
              component={FormCustomTextField}
              value={values.fatherName}
              onChange={handleChange}
            />
            {errors.fatherName && (
              <div className="error">{errors.fatherName}</div>
            )}
          </div>
          <div>
            <Field
              label="Mother Name"
              name="motherName"
              component={FormCustomTextField}
              value={values.motherName}
              onChange={handleChange}
            />
            {errors.motherName && (
              <div className="error">{errors.motherName}</div>
            )}
          </div>
          <div>
            <Field
              label="Native Place"
              name="nativePlace"
              component={FormCustomSelectField}
              option={[
                { label: "Colcacel", value: "Colcacel" },
                { label: "Nagercoil", value: "Nagercoil" },
                { label: "Marthadam", value: "Marthadam" },
                { label: "Kochin", value: "Kochin" },
              ]}
            />
            {errors.nativePlace && (
              <div className="error">{errors.nativePlace}</div>
            )}
          </div>
          <div>
            <Field
              label="Native District"
              name="nativeDistrict"
              component={FormCustomSelectField}
              option={[
                { label: "Colcacel", value: "Colcacel" },
                { label: "Nagercoil", value: "Nagercoil" },
                { label: "Marthadam", value: "Marthadam" },
                { label: "Kochin", value: "Kochin" },
              ]}
            />
            {errors.nativeDistrict && (
              <div className="error">{errors.nativeDistrict}</div>
            )}
          </div>
          <div>
            <Field
              label="Native State"
              name="nativeState"
              component={FormCustomSelectField}
              option={[
                { label: "Tamil Nadu", value: "Tamil Nadu" },
                { label: "Kerala", value: "Kerala" },
                { label: "Mumbai", value: "Mumbai" },
              ]}
            />
            {errors.nativeState && (
              <div className="error">{errors.nativeState}</div>
            )}
          </div>
          <div>
            <Field
              label="Contact No"
              name="contactNo"
              component={FormCustomTextField}
              value={values.contactNo}
              onChange={handleChange}
            />
            {errors.contactNo && (
              <div className="error">{errors.contactNo}</div>
            )}
          </div>
          <div>
            <Field
              label="Emergency Contact No"
              name="emergencyContactNo"
              component={FormCustomTextField}
              value={values.emergencyContactNo}
              onChange={handleChange}
            />
            {errors.emergencyContactNo && (
              <div className="error">{errors.emergencyContactNo}</div>
            )}
          </div>
          <div>
            <Field
              label="Email Id"
              name="emailId"
              component={FormCustomTextField}
              value={values.emailId}
              onChange={handleChange}
            />
            {errors.emailId && <div className="error">{errors.emailId}</div>}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "32px" }}>
        <h2>Matrial Status</h2>
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
              label="Martial Status"
              name="martialStatus"
              component={FormCustomSelectField}
              option={[
                { label: "Single", value: "Single" },
                { label: "Married", value: "Married" },
              ]}
            />
            {errors.martialStatus && (
              <div className="error">{errors.martialStatus}</div>
            )}
          </div>
          <div>
            <Field
              label="Wife Name"
              name="wifeName"
              component={FormCustomTextField}
              value={values.wifeName}
              onChange={handleChange}
            />
            {errors.wifeName && <div className="error">{errors.wifeName}</div>}
          </div>
          <div>
            <Field
              label="DOB"
              name="pastorWifeDOB"
              component={FormCustomTextField}
              value={values.pastorWifeDOB}
              onChange={handleChange}
            />
            {errors.pastorWifeDOB && (
              <div className="error">{errors.pastorWifeDOB}</div>
            )}
          </div>
          <div>
            <Field
              label="First Child Name"
              name="firstChildName"
              component={FormCustomTextField}
              value={values.firstChildName}
              onChange={handleChange}
            />
            {errors.firstChildName && (
              <div className="error">{errors.firstChildName}</div>
            )}
          </div>
          <Field
            label="Second Child Name"
            name="secondChildName"
            component={FormCustomTextField}
            value={values.secondChildName}
            onChange={handleChange}
          />
        </div>
      </div>
      {/* <button type="submit">Next</button> */}
    </div>
  );
};
