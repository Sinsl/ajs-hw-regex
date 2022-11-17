export default function cleaningPhoneNumber(num) {
  return num.replace(/[^\d\\+]/g, '').replace(/^8/, '+7');
}
