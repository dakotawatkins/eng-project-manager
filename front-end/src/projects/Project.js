import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { readProject, readSiteProject } from "../utils/api";

function Project() {
  const { projectId } = useParams();

  const [projectInfo, setProjectInfo] = useState(false);
  const [project, setProject] = useState({});
  const [siteProject, setSiteProject] = useState({});
  const [error, setError] = useState(null);

  function loadProject(projectId) {
    setError(null);
    const abortController = new AbortController();
    readProject(projectId, abortController.signal)
      .then(setProject)
      .catch(setError);
    return () => abortController.abort();
  }

  function loadSiteProject(projectId) {
    setError(null);
    const abortController = new AbortController();
    readSiteProject(projectId, abortController.signal)
      .then(setSiteProject)
      .catch(setError);
    return () => abortController.abort();
  }

  useEffect(() => {
    loadProject(projectId);
    loadSiteProject(projectId);
  }, [projectId]);

  return (
    <div>
      <h1>{project.project_name}</h1>
      <table className="table text-wrap text-center table-hover">
        <thead className="thead-dark">
          <tr className="text-center">
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=""></td>
          </tr>
        </tbody>
      </table>

      <table className="table text-wrap text-left table-hover">
        <thead className="thead-dark">
          <tr className="">
            <th scope="">Project Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="">Project ID</td>
            <td className="">{project.project_id}</td>
          </tr>
          <tr>
            <td className="">Project Code</td>
            <td className="">{project.project_code}</td>
          </tr>
          <tr>
            <td className="">Project Name</td>
            <td className="">{project.project_name}</td>
          </tr>
          <tr>
            <td className="">Client ID</td>
            <td className="">{project.client_id}</td>
          </tr>
          <tr>
            <td className="">Owner ID</td>
            <td className="">{project.owner_id}</td>
          </tr>
        </tbody>
        {/* </table>
        //HERE I COMMENTED OUT THE LAST/FIRST PART OF THE TWO TABLES
        //TO SHOW ALL INFO AS ONE TABLE
      <table className="table text-wrap text-left table-hover"> */}
        <thead className="thead-dark">
          <tr className="">
            <th scope="">Site Specifications</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="">Site ID</td>
            <td className="">{siteProject.site_id}</td>
          </tr>
          <tr>
            <td className="">Address</td>
            <td className="">{siteProject.site_address_line_1}</td>
          </tr>
          <tr>
            <td className="">City</td>
            <td className="">{siteProject.site_city}</td>
          </tr>
          <tr>
            <td className="">County</td>
            <td className="">{siteProject.site_county}</td>
          </tr>
          <tr>
            <td className="">State</td>
            <td className="">{siteProject.site_state}</td>
          </tr>
          <tr>
            <td className="">Zipcode</td>
            <td className="">{siteProject.site_zipcode}</td>
          </tr>
          <tr>
            <td className="">Latitude</td>
            <td className="">{siteProject.site_latitude_n}</td>
            <td className="">N</td>
          </tr>
          <tr>
            <td className="">Longitude</td>
            <td className="">{siteProject.site_longitude_w}</td>
            <td className="">W</td>
          </tr>
          <tr>
            <td className="">Elevation</td>
            <td className="">{siteProject.site_elevation}</td>
            <td className="">Ft.</td>
          </tr>
        </tbody>

        <thead className="thead-dark">
          <tr className="">
            <th scope="">Climate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="">ASHRAE City</td>
            <td className="">{siteProject.ashrae_city}</td>
            <td className=""></td>
          </tr>
          <tr>
            <td className="">ASHRAE State</td>
            <td className="">{siteProject.ashrae_state}</td>
            <td className=""></td>
          </tr>
          <tr>
            <td className="">Highest Monthly 0.4%</td>
            <td className="">{siteProject.highest_monthly_0_4}</td>
            <td className="">C</td>
          </tr>
          <tr>
            <td className="">Highest Monthly 2.0%</td>
            <td className="">{siteProject.highest_monthly_2_0}</td>
            <td className="">C</td>
          </tr>
          <tr>
            <td className="">Yearly 0.4%</td>
            <td className="">{siteProject.highest_yearly_0_4}</td>
            <td className="">C</td>
          </tr>
          <tr>
            <td className="">Yearly 2.0%</td>
            <td className="">{siteProject.highest_yearly_2_0}</td>
            <td className="">C</td>
          </tr>
          <tr>
            <td className="">Extreme Mean Annual Design Temp - Max</td>
            <td className="">
              {siteProject.extreme_mean_annual_design_temp_max}
            </td>
            <td className="">C</td>
          </tr>
          <tr>
            <td className="">Extreme Mean Annual Design Temp - Min</td>
            <td className="">
              {siteProject.extreme_mean_annual_design_temp_min}
            </td>
            <td className="">C</td>
          </tr>
          <tr>
            <td className="">Min Recorded Temp (N=50)</td>
            <td className="">{siteProject.min_recorded_temp}</td>
            <td className="">C</td>
          </tr>
          <tr>
            <td className="">Max Recorded Temp (N=50)</td>
            <td className="">{siteProject.max_recorded_temp}</td>
            <td className="">C</td>
          </tr>
          <tr>
            <td className="">Inverter Design Temp</td>
            <td className="">{siteProject.inverter_design_temp}</td>
            <td className="">C</td>
          </tr>
          <tr>
            <td className="">Trise</td>
            <td className="">{siteProject.trise}</td>
            <td className="">C</td>
          </tr>
        </tbody>

        <thead className="thead-dark">
          <tr className="">
            <th scope="">CAD Geolocation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="">Coordinate System</td>
            <td className="">{siteProject.acad_coordinate_system}</td>
          </tr>
          <tr>
            <td className="">Abbreviation</td>
            <td className="">
              {siteProject.acad_coordinate_system_abbreviation}
            </td>
          </tr>
          <tr>
            <td className="">Zone</td>
            <td className="">{siteProject.acad_coordinate_system_zone}</td>
          </tr>
          <tr>
            <td className="">Unit</td>
            <td className="">{siteProject.acad_coordinate_system_unit}</td>
          </tr>
          <tr>
            <td className="">Drawing Units</td>
            <td className="">{siteProject.acad_unit_length_type}</td>
          </tr>
          <tr>
            <td className="">Length</td>
            <td className="">{siteProject.acad_unit_length_precision}</td>
          </tr>
          <tr>
            <td className="">Type</td>
            <td className="">{siteProject.acad_angle_type}</td>
          </tr>
          <tr>
            <td className="">Precision</td>
            <td className="">{siteProject.acad_angle_precision}</td>
          </tr>
          <tr>
            <td className="">Insertion Scale</td>
            <td className="">{siteProject.acad_angle_insertion_scale}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Project;
