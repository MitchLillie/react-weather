var React = require('react')

var About = (props) => {
  return (
    <div>
      <h1 className='text-centered page-title'>
        About Magic Weather
      </h1>
      <p>
        This app was built as part of&nbsp;
        <a href='https://www.udemy.com/the-complete-react-web-app-developer-course'>
          Andrew Mead's Complete React Web Developer Course on Udemy
        </a>. Technologies include React, React Router, Webpack, Node/Express,&nbsp;
         Foundation, and more. You can view the source at the&nbsp;
        <a href='http://github.com/mitchlillie/react-weather'>
          Github repo
        </a>.
      </p>
    </div>
  )
}

module.exports = About
