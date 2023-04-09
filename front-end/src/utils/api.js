/**
 * Defines the base URL for the API.
 * The default values is overridden by the `API_BASE_URL` environment variable.
 */
const API_BASE_URL =
  // process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";
  "http://localhost:5001";

/**
 * Defines the default headers for these functions to work with `json-server`
 */
const headers = new Headers();
headers.append("Content-Type", "application/json");

/**
 * Fetch `json` from the specified URL and handle error status codes and ignore `AbortError`s
 *
 * This function is NOT exported because it is not needed outside of this file.
 *
 * @param url
 *  the url for the requst.
 * @param options
 *  any options for fetch
 * @param onCancel
 *  value to return if fetch call is aborted. Default value is undefined.
 * @returns {Promise<Error|any>}
 *  a promise that resolves to the `json` data or an error.
 *  If the response is not in the 200 - 399 range the promise is rejected.
 */
async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

/**
 * Retrieves all existing project.
 * @returns {Promise<[project]>}
 *  a promise that resolves to a possibly empty array of project saved in the database.
 */

// Lists all projects for a particular data (params input)
export async function listProjects(params, signal) {
  const url = new URL(`${API_BASE_URL}/projects`);
  if (params) {
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value.toString())
    );
  }
  return await fetchJson(url, { headers, signal, method: "GET" }, []);
}

// Retrieves the project with the specified `projectId`
export async function readProject(projectId, signal) {
  const url = `${API_BASE_URL}/projects/${projectId}`;
  return await fetchJson(url, { signal });
}

// returns entire equipment catalog on the equipment page
export async function listEquipment(signal) {
  const url = `${API_BASE_URL}/equipment`;
  return await fetchJson(url, { headers, signal, method: "GET" }, []);
}

// Retrieves the project site info with the specified `projectId`
// THE URL OF THIS SHOULD GET LOOKED AT FOR BOTH THIS FUNCTION AND THE BACKEND ROUTE
// THIS IS CURRENTLY 'DUMMY' DATA BY USING 'projectId' as the 'site-project' ID.
export async function readSiteProject(projectId, signal) {
  const url = `${API_BASE_URL}/projects/${projectId}/site-project/${projectId}`;
  return await fetchJson(url, { signal });
}

// Retrieves the project site info with the specified `projectId`
// THE URL OF THIS SHOULD GET LOOKED AT FOR BOTH THIS FUNCTION AND THE BACKEND ROUTE
// THIS IS CURRENTLY 'DUMMY' DATA BY USING 'projectId' as the 'site-project' ID.
export async function listTransmissionLine(projectId, signal) {
  const url = `${API_BASE_URL}/projects/${projectId}/transmission-line`;
  return await fetchJson(url, { signal });
}

// Retrieves the project site info with the specified `projectId`
// THE URL OF THIS SHOULD GET LOOKED AT FOR BOTH THIS FUNCTION AND THE BACKEND ROUTE
// THIS IS CURRENTLY 'DUMMY' DATA BY USING 'projectId' as the 'site-project' ID.
export async function readTransmissionLine(projectId, signal) {
  const url = `${API_BASE_URL}/projects/${projectId}/transmission-line/${projectId}`;
  return await fetchJson(url, { signal });
}

// Retrieves the project site info with the specified `projectId`
// THE URL OF THIS SHOULD GET LOOKED AT FOR BOTH THIS FUNCTION AND THE BACKEND ROUTE
// THIS IS CURRENTLY 'DUMMY' DATA BY USING 'projectId' as the 'site-project' ID.
export async function listHv(projectId, signal) {
  const url = `${API_BASE_URL}/projects/${projectId}/hv`;
  return await fetchJson(url, { signal });
}

export async function listMvCircuits(projectId, signal) {
  const url = `${API_BASE_URL}/projects/${projectId}/mv-circuits`;
  return await fetchJson(url, { signal });
}

export async function listModules(projectId, signal) {
  const url = `${API_BASE_URL}/projects/${projectId}/modules`;
  return await fetchJson(url, { signal });
}
