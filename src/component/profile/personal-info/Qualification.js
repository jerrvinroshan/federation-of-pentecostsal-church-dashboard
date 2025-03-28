import { Field } from "formik";
import {
  FormCustomDatePickerField,
  FormCustomTextField,
} from "./FormCustomField";
import dayjs from "dayjs";

export const Qualification = ({ values, handleChange, errors }) => {
  return (
    <div>
      <div>
        <h2>Educational Qualification</h2>
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
              label="Degree"
              name="collegeDegree"
              component={FormCustomTextField}
              value={values.collegeDegree}
              onChange={handleChange}
            />
            {/* {errors.collegeDegree && (
              <div className="error">{errors.collegeDegree}</div>
            )} */}
          </div>
          <div>
            <Field
              label="Institute"
              name="collegeInstitute"
              component={FormCustomTextField}
              value={values.collegeInstitute}
              onChange={handleChange}
            />
            {/* {errors.collegeInstitute && (
              <div className="error">{errors.collegeInstitute}</div>
            )} */}
          </div>
          <div>
            <Field
              label="Place"
              name="collegePlace"
              component={FormCustomTextField}
              value={values.collegePlace}
              onChange={handleChange}
            />
            {/* {errors.collegePlace && (
              <div className="error">{errors.collegePlace}</div>
            )} */}
          </div>
          <div>
            <Field
              label="Year of Passing"
              name="collegeYearOfPassing"
              component={FormCustomDatePickerField}
              value={dayjs(values.collegeYearOfPassing)}
              onChange={handleChange}
              views={["year"]}
              minDate={dayjs("1950-01-01")}
            />
            {/* {errors.collegeYearOfPassing && (
              <div className="error">{errors.collegeYearOfPassing}</div>
            )} */}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "32px" }}>
        <h2>Theological Qualification</h2>
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
              label="Degree"
              name="theologicalDegree"
              component={FormCustomTextField}
              value={values.theologicalDegree}
              onChange={handleChange}
            />
            {/* {errors.theologicalDegree && (
              <div className="error">{errors.theologicalDegree}</div>
            )} */}
          </div>
          <div>
            <Field
              label="Institute"
              name="theologicalInstitute"
              component={FormCustomTextField}
              value={values.theologicalInstitute}
              onChange={handleChange}
            />
            {/* {errors.theologicalInstitute && (
              <div className="error">{errors.theologicalInstitute}</div>
            )} */}
          </div>
          <div>
            <Field
              label="Place"
              name="theologicalPlace"
              component={FormCustomTextField}
              value={values.theologicalPlace}
              onChange={handleChange}
            />
            {/* {errors.theologicalPlace && (
              <div className="error">{errors.theologicalPlace}</div>
            )} */}
          </div>
          <div>
            <Field
              label="Year of Passing"
              name="theologicalYearOfPassing"
              component={FormCustomDatePickerField}
              value={dayjs(values.theologicalYearOfPassing)}
              onChange={handleChange}
              views={["year"]}
              minDate={dayjs("1950-01-01")}
            />
            {/* {errors.theologicalYearOfPassing && (
              <div className="error">{errors.theologicalYearOfPassing}</div>
            )} */}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "32px" }}>
        <h2>Ordination Detail</h2>
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
              label="Degree"
              name="ordinationDegree"
              component={FormCustomTextField}
              value={values.ordinationDegree}
              onChange={handleChange}
            />
            {/* {errors.ordinationDegree && (
              <div className="error">{errors.ordinationDegree}</div>
            )} */}
          </div>
          <div>
            <Field
              label="Institute"
              name="ordinationInstitute"
              component={FormCustomTextField}
              value={values.ordinationInstitute}
              onChange={handleChange}
            />
            {/* {errors.ordinationInstitute && (
              <div className="error">{errors.ordinationInstitute}</div>
            )} */}
          </div>
          <div>
            <Field
              label="Place"
              name="ordinationPlace"
              component={FormCustomTextField}
              value={values.ordinationPlace}
              onChange={handleChange}
            />
            {/* {errors.ordinationPlace && (
              <div className="error">{errors.ordinationPlace}</div>
            )} */}
          </div>
          <div>
            <Field
              label="Date"
              name="ordinationDate"
              component={FormCustomDatePickerField}
              value={dayjs(values.ordinationDate)}
              onChange={handleChange}
              format="DD/MM/YYYY"
            />
            {/* {errors.ordinationDate && (
              <div className="error">{errors.ordinationDate}</div>
            )} */}
          </div>
          <div>
            <Field
              label="Ministry Starting Date"
              name="ordinationMinistryStartingDate"
              component={FormCustomDatePickerField}
              value={dayjs(values.ordinationMinistryStartingDate)}
              onChange={handleChange}
              format="DD/MM/YYYY"
            />
            {/* {errors.ordinationMinistryStartingDate && (
              <div className="error">
                {errors.ordinationMinistryStartingDate}
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};
