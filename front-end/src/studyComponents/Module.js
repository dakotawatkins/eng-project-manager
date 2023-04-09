export default function Module({ module, projectId }) {
  return (
    <tr>
      <th scope="row">{module.project_id}</th>
      <td>{module.mod_number}</td>
      <td>{module.mod_manufacturer}</td>
      <td>{module.mod_series}</td>
      <td>{module.mod_model}</td>
      <td>{module.mod_chemistry}</td>
      <td>{module.mod_id}</td>
      <td>{module.mod_mono_or_bi_facial}</td>
      <td>{module.mod_cells}</td>
      <td>{module.mod_frame}</td>
      <td>{module.mod_connector}</td>
      <td>{module.mod_frame_width_mm}</td>
      <td>{module.mod_frame_length_mm}</td>
      <td>{module.mod_lead_length}</td>
      <td>{module.mod_max_voltage_v}</td>
      <td>{module.mod_max_power_w}</td>
      <td>{module.mod_open_circuit_voltage_v}</td>
      <td>{module.mod_short_circuit_current_isc_a}</td>
      <td>{module.mod_max_power_current_vmp_v}</td>
      <td>{module.mod_efficiency}</td>
      <td>{module.mod_max_series_fuse_rating_a}</td>
      <td>{module.mod_power_output_tolerance_w}</td>
      <td>{module.mod_voc_and_isc_tolerance}</td>
      <td>{module.mod_nmot}</td>
      <td>{module.mod_coefficient_of_isc}</td>
      <td>{module.mod_coefficient_of_voc}</td>
      <td>{module.mod_coefficient_of_pmax}</td>
      <td>{module.mod_string_size}</td>
      <td>{module.mod_3hr_ave_max_current_front_side_a}</td>
      <td>{module.mod_3hr_ave_max_current_w_bifacial_gain_a}</td>
      <td>{module.mod_bifacial_gain}</td>
      <td>{module.mod_modeling_buffer}</td>
    </tr>
  );
}
