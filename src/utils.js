
// function checks to make sure the user doesn't input a start date in the past (date prior to today's date)
export function checkPreviousDate(date) {
  const today = new Date()
  const selectedDate = new Date(date)
  return selectedDate >= today

}


export function handleChange(value, state) {
  if (window.scrollY >= value) {
    state(true)
  } else {
    state(false)
  }
}