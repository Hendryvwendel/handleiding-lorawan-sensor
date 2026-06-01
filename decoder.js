function Decode(fport, bytes) {

  function readUInt16LE(b, i) {
    return b[i] | (b[i + 1] << 8);
  }

  if (bytes.length < 7) {
    return { errors: ["Payload too short"] };
  }

  // Decodering volgens jouw structuur
  let temperature = readUInt16LE(bytes, 0) / 100;
  let humidity    = readUInt16LE(bytes, 2) / 100;
  let co2         = readUInt16LE(bytes, 4);
  let battery     = bytes[6];

  return {
      temperature,
      humidity,
      co2,
      battery
  };
}
