var React = require('react')
var {Link} = require('react-router')

var Examples = (props) => {
  return (
    <div>
      <h1 className='text-centered page-title'>
        Examples
      </h1>
      <p>
        Here are a few example locations to try out
      </p>
      <ol>
        <li>
          <Link to='/?location=state%20college'>State College, PA</Link>
        </li>
        <li>
          <Link to='/?location=quito'>Quito, Ecuador</Link>
        </li>
      </ol>
    </div>
  )
}

module.exports = Examples
