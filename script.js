function calculateVolume() {
  // Get the radius value from the input field
  const radius = document.getElementById('radius').value;

  // Calculate the volume of the sphere
  const volume = volume_sphere(radius);

  // Display the volume in the output field
  document.getElementById('volume').textContent = volume;
}

function volume_sphere(radius) {
  // Calculate the volume of the sphere using the formula (4/3) * π * r^3
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Round the volume to 2 decimal places
  return volume.toFixed(2);
}
