export const formFieldInputs = [
  {
    id: '1001',
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    variant: 'outlined',
    helperText: ' ',
    required: true,
    size: 'small',
    InputLabelProps: {
      shrink: true,
    },
    style: {
      width: '45%',
    },
  },
  {
    id: '1002',
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    variant: 'outlined',
    helperText: ' ',
    required: true,
    InputLabelProps: {
      shrink: true,
    },
    size: 'small',
    style: {
      width: '46%',
    },
  },
  {
    id: '1003',
    name: 'phoneNumber',
    label: 'Phone Number',
    type: 'text',
    placeholder: '( ___ ) - ___ - ____',
    variant: 'outlined',
    helperText: ' ',
    required: true,
    size: 'small',
    InputLabelProps: {
      shrink: true,
    },
    style: {
      width: '45%',
    },
  },
  {
    id: '1004',
    name: 'email',
    label: 'Email',
    type: 'email',
    variant: 'outlined',
    helperText: ' ',
    required: true,
    InputLabelProps: {
      shrink: true,
    },
    size: 'small',
    style: {
      width: '46%',
    },
  },
  {
    id: '1005',
    name: 'companyName',
    label: 'Company Name or URL',
    type: 'text',
    variant: 'outlined',
    helperText: ' ',
    InputLabelProps: {
      shrink: true,
    },
    required: true,
    fullWidth: true,
  },
  {
    id: '1007',
    name: 'message',
    label: 'How can we help you?',
    variant: 'outlined',
    helperText: ' ',
    InputLabelProps: {
      shrink: true,
    },
    required: true,
    multiline: true,
    rowsmax: 4,
    fullWidth: true,
  },
  {
    id: '1008',
    name: 'startDate',
    variant: 'outlined',
    label: 'Project Start Date',
    required: false,
    fullWidth: true,
    type: 'date',
    InputLabelProps: {
      shrink: true,
    },
    inputProps: {
      min: new Date().toISOString().split('T')[0],
    },
  },
  {
    id: '1009',
    name: 'whereDidYouHearAboutUs',
    label: 'How did you hear about us?',
    variant: 'outlined',
    helperText: ' ',
    InputLabelProps: {
      shrink: true,
    },
    required: false,
    fullWidth: true,
    select: true,
  },
]

export const selectInputs = [
  {
    value: 'google search',
    label: 'Google Search',
  },
  {
    value: 'repeat client',
    label: 'Repeat Client',
  },
  {
    value: 'referral',
    label: 'Referral',
  },
  {
    value: 'other',
    label: 'Other',
  },
]
