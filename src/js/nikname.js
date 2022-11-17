export default function validateUsername(userName) {
  return /^(?!.*[\d]{3})[^\d-_][\w-]+[^\d-_]$/.test(userName);
}
