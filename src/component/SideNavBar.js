import { useState } from "react";
import { NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const SideNavBar = () => {
  const [isZoneOpen, setIsZoneOpen] = useState(false);
  const [isMemberOpen, setIsMemberOpen] = useState(false);
  const [isAccountingOpen, setIsAccountingOpen] = useState(false);
  const [isReportsOpen, setIsReportsOpen] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  const toggleZone = () => setIsZoneOpen((prev) => !prev);
  const toggleMembers = () => setIsMemberOpen((prev) => !prev);
  const toggleAccounting = () => setIsAccountingOpen((prev) => !prev);
  const toggleReports = () => setIsReportsOpen((prev) => !prev);
  const toggleConfig = () => setIsConfigOpen((prev) => !prev);

  const checkIfActive = (path) => {
    return window.location.pathname.includes(path);
  };

  return (
    <div className="SideNavBar__bg">
      <div className="SideNavBar__Container">
        <ul className="SideNavBar__list">
          <li className="SideNavBar__item">
            <NavLink
              className="SideNavBar__Link"
              to="/dashboard"
              isActive={() => window.location.pathname === "/dashboard"}
            >
              Dashboard
            </NavLink>
          </li>

          <li className="SideNavBar__item" onClick={toggleZone}>
            <div className="SideNavBar__MenuItem">
              Zone
              {isZoneOpen || checkIfActive("/zone/add-zone") ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </div>
            <ul
              className="SideNavBar__SubMenuItem"
              style={{
                display:
                  isZoneOpen || checkIfActive("/zone/add-zone")
                    ? "flex"
                    : "none",
              }}
            >
              <li>
                <NavLink
                  className="SideNavBar__Link"
                  to="/zone/add-zone"
                  isActive={() => window.location.pathname === "/zone/add-zone"}
                >
                  Add Zone
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="SideNavBar__item" onClick={toggleMembers}>
            <div className="SideNavBar__MenuItem">
              Members
              {isMemberOpen || checkIfActive("/member/add-member") ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </div>
            <ul
              className="SideNavBar__SubMenuItem"
              style={{
                display:
                  isMemberOpen || checkIfActive("/member/add-member")
                    ? "flex"
                    : "none",
              }}
            >
              <li>
                <NavLink
                  className="SideNavBar__Link"
                  to="/member/add-member"
                  isActive={() =>
                    window.location.pathname === "/member/add-member"
                  }
                >
                  Add Member
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="SideNavBar__item" onClick={toggleAccounting}>
            <div className="SideNavBar__MenuItem">
              Accounting
              {isAccountingOpen ||
              checkIfActive("/accounting/add-category") ||
              checkIfActive("/accounting/add-subcategory") ||
              checkIfActive("/accounting/add-ledger") ||
              checkIfActive("/accounting/view-ledger") ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </div>
            <ul
              className="SideNavBar__SubMenuItem"
              style={{
                display:
                  isAccountingOpen ||
                  checkIfActive("/accounting/add-category") ||
                  checkIfActive("/accounting/add-subcategory") ||
                  checkIfActive("/accounting/add-ledger") ||
                  checkIfActive("/accounting/view-ledger")
                    ? "flex"
                    : "none",
              }}
            >
              <li>
                <NavLink
                  className="SideNavBar__Link"
                  to="/accounting/add-category"
                  isActive={() =>
                    window.location.pathname === "/accounting/add-category"
                  }
                >
                  Add Category
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="SideNavBar__Link"
                  to="/accounting/add-subcategory"
                  isActive={() =>
                    window.location.pathname === "/accounting/add-subcategory"
                  }
                >
                  Add Subcategory
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="SideNavBar__Link"
                  to="/accounting/add-ledger"
                  isActive={() =>
                    window.location.pathname === "/accounting/add-ledger"
                  }
                >
                  Add Ledger
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="SideNavBar__Link"
                  to="/accounting/view-ledger"
                  isActive={() =>
                    window.location.pathname === "/accounting/view-ledger"
                  }
                >
                  View Ledger
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="SideNavBar__item" onClick={toggleReports}>
            <div className="SideNavBar__MenuItem">
              Reports
              {isReportsOpen ||
              checkIfActive("/report/ledger-report") ||
              checkIfActive("/report/member-report") ||
              checkIfActive("/report/anniversary-report") ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </div>
            <ul
              className="SideNavBar__SubMenuItem"
              style={{
                display:
                  isReportsOpen ||
                  checkIfActive("/report/ledger-report") ||
                  checkIfActive("/report/member-report") ||
                  checkIfActive("/report/anniversary-report")
                    ? "flex"
                    : "none",
              }}
            >
              <li>
                <NavLink
                  className="SideNavBar__Link"
                  to="/report/ledger-report"
                  isActive={() =>
                    window.location.pathname === "/report/ledger-report"
                  }
                >
                  Ledger Report
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="SideNavBar__Link"
                  to="/report/member-report"
                  isActive={() =>
                    window.location.pathname === "/report/member-report"
                  }
                >
                  Member Report
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="SideNavBar__Link"
                  to="/report/anniversary-report"
                  isActive={() =>
                    window.location.pathname === "/report/anniversary-report"
                  }
                >
                  Anniversary Report
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="SideNavBar__item" onClick={toggleConfig}>
            <div className="SideNavBar__MenuItem">
              Configuration
              {isConfigOpen || checkIfActive("/config/add-payment-method") ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </div>
            <ul
              className="SideNavBar__SubMenuItem"
              style={{
                display:
                  isConfigOpen || checkIfActive("/config/add-payment-method")
                    ? "flex"
                    : "none",
              }}
            >
              <li>
                <NavLink
                  className="SideNavBar__Link"
                  to="/config/add-payment-method"
                  isActive={() =>
                    window.location.pathname === "/config/add-payment-method"
                  }
                >
                  Add Payment Method
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
