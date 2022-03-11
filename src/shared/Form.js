import {Grid, Column, FormItems, Text, Spacer} from './'

const gutters = [
  {breakpoint: null, size: '0'},
  {breakpoint: 'md', size: '1.5rem'}
]

const Form = () =>  {
  return (
    <form>
      <fieldset>
        <Spacer name='margin' pos='bottom' size='2'>
          <Text style='legend' as='legend'>Account Information</Text>
        </Spacer>

        <Grid gutter={gutters}>
          <Column
            gutter={gutters}
            cols={[
              {breakpoint: null, size: '12'},
            ]}
            key='current-pass'>
              <FormItems
                label='Current Password'
                type='password'
                id='current-pass'
                help='Required if you want to change the Email address or Password below. Reset your password.'
                required={false}
                error='error msg'
              />
          </Column>
          <Column
            gutter={gutters}
            cols={[
              {breakpoint: null, size: '12'},
            ]}
            key='email'>
              <FormItems
                type='email'
                label='Login ID / Preferred Email Address*'
                id='email'
                help='A valid email address. All emails from the system will be sent to this address.
                The email address is not made public and will only be used if you wish to receive a
                new password or wish to receive certain news or notifications by email.'
                required={true}
                error='error msg'
              />
          </Column>
          <Column
            gutter={gutters}
            cols={[
              {breakpoint: null, size: '12'},
              {breakpoint: 'md', size: '6'}
            ]}
            key='new-pass'>
              <FormItems
                label='New Password'
                type='password'
                id='new-pass'
                help='Required if you want to change the Email address or Password below. Reset your password.'
                required={true}
                error='error msg'
              />
          </Column>
          <Column
            gutter={gutters}
            cols={[
              {breakpoint: null, size: '12'},
              {breakpoint: 'md', size: '6'}
            ]}
            key='confirm-new-pass'>
              <FormItems
                label='Confirm Password'
                type='password'
                id='confirm-new-pass'
                help='Passwords match: To change the current user password, enter the new password in both fields.'
                required={true}
                error='error msg'
              />
          </Column>

        </Grid>
      </fieldset>
    </form>
  )
}

export default Form
