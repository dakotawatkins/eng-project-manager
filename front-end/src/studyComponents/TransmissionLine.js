export default function TransmissionLine({ tLine, projectId }) {
  return (
    <tr>
      <th scope="row">{tLine.transmission_line_unique_id}</th>
      <td>{tLine.section_id}</td>
      <td>{tLine.project_id}</td>
      <td>{tLine.from}</td>
      <td>{tLine.to}</td>
      <td>{tLine.distance_m}</td>
      <td>{tLine.conductor_size_m2}</td>
      <td>{tLine.conductor_positive_sequence_resistance}</td>
      <td>{tLine.basis_temp_of_provided_resistance_c}</td>
      <td>{tLine.normal_op_temp_of_conductor_c}</td>
      <td>{tLine.bundle_size}</td>
      <td>{tLine.additional_loading_on_t_line_from_nearby_projects}</td>
      <td>{tLine.nearby_project}</td>
      <td>{tLine.rrc_notes}</td>
      <td>{tLine.client_notes}</td>
    </tr>
  );
}
