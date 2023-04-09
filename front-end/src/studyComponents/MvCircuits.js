export default function MvCircuits({ circuit, projectId }) {
  return (
    <tr>
      <th scope="row">{circuit.mv_unique_id}</th>
      <td>{circuit.mv_id}</td>
      <td>{circuit.project_id}</td>
      <td>{circuit.mv_ppa}</td>
      <td>{circuit.mv_mpt}</td>
      <td>{circuit.mv_breaker_bay}</td>
      <td>{circuit.mv_termination}</td>
      <td>{circuit.mv_previous_feeder_id}</td>
      <td>{circuit.mv_from}</td>
      <td>{circuit.mv_to}</td>
      <td>{circuit.mv_schedule_order}</td>
      <td>{circuit.mv_number_of_skids}</td>
      <td>{circuit.mv_cable_size_iterate}</td>
      <td>{circuit.mv_hyperlink_tag_from_acad}</td>
      <td>{circuit.mv_pt_to_pt_circuit_length_from_acad}</td>
      <td>{circuit.mv_etap_bus}</td>
      <td>{circuit.mv_3ph_sc_value_from_etap_ka}</td>
      <td>{circuit.mv_l_g_sc_value_from_etap_ka}</td>
      <td>{circuit.mv_l_l_sc_value_from_etap_ka}</td>
      <td>{circuit.mv_llg_sc_value_from_etap_ka}</td>
    </tr>
  );
}
