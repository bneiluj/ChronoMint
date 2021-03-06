import validate from '../../../../src/components/forms/NewPollForm/validate'
import PollModel from '../../../../src/models/PollModel'

describe('New Poll Form validate', () => {
  it('should not validate Poll Form #1', () => {
    const values = new PollModel({pollTitle: 'XZ', voteLimit: 40000, options: ['a']})
    const errors = validate(values)
    expect(errors.options).toBeDefined()
    expect(errors.pollTitle).toBeDefined()
    expect(errors.voteLimit).toBeDefined()
  })

  it('should not validate Poll Form #2', () => {
    const values = new PollModel({files: ['qw', 'qw', 'qw', 'qw', 'qw', 'qw'],
      options: ['abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc']})
    const errors = validate(values)
    expect(errors.options).toBeDefined()
    expect(errors.files).toBeDefined()
  })

  it('should validate Poll Form', () => {
    const values = new PollModel({pollTitle: 'New Poll #1', voteLimit: 30000, options: ['for all good', 'for all bad']})
    const errors = validate(values)
    expect(errors.options).not.toBeDefined()
    expect(errors.pollTitle).not.toBeDefined()
    expect(errors.voteLimit).not.toBeDefined()
  })
})
