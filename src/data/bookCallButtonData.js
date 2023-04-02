const inputFieldData = [
  {
    id: '2000',
    name: 'fullName',
    label: 'Full Name',
    required: true,
    variant: 'outlined',
    size: 'small',
    type: 'text',
    InputLabelProps: {
      shrink: true,
    },
    style: {
      width: '49%',
      paddingRight: '1%',
    },
  },
  {
    id: '2002',
    name: 'phoneNumber',
    label: 'Phone Number',
    required: true,
    placeholder: '( ___ ) - ___ - ____',
    variant: 'outlined',
    size: 'small',
    type: 'text',
    InputLabelProps: {
      shrink: true,
    },
    style: {
      width: '49%',
    },
  },
  {
    id: '2003',
    name: 'email',
    label: 'Email',
    required: true,
    placeholder: 'email@email.com',
    variant: 'outlined',
    size: 'small',
    fullWidth: true,
    type: 'email',
    InputLabelProps: {
      shrink: true,
    },
  },
  {
    id: '2004',
    name: 'companyName',
    label: 'Company Name or URL',
    required: true,
    variant: 'outlined',
    size: 'small',
    fullWidth: true,
    type: 'text',
    InputLabelProps: {
      shrink: true,
    },
  },
  {
    id: '2005',
    name: 'userMessage',
    label: 'How may we help you?',
    required: true,
    multiline: true,
    rowsMax: 4,
    variant: 'outlined',
    size: 'small',
    fullWidth: true,
    type: 'text',
    InputLabelProps: {
      shrink: true,
    },
  },
]

export default inputFieldData
