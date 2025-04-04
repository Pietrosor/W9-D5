import React from "react"

function MyFooter() {
  return (
    <footer className="d-flex justify-content-center align-items-center w-50 mx-auto mt-5 text-secondary">
      <table className="table table-borderless small-text">
        <tbody>
          <tr>
            <td className="bg-transparent">
              <i className="bi bi-instagram text-secondary"></i>
              <i className="bi bi-facebook text-secondary"></i>
              <i className="bi bi-twitter text-secondary"></i>
              <i className="bi bi-youtube text-secondary"></i>
            </td>
          </tr>
          <tr>
            <td className="bg-transparent text-secondary">
              Audio and subtitles
            </td>
            <td className="bg-transparent text-secondary">Audio description</td>
            <td className="bg-transparent text-secondary">Text center</td>
            <td className="bg-transparent text-secondary">Gift Cards</td>
          </tr>
          <tr>
            <td className="bg-transparent text-secondary">Media Center</td>
            <td className="bg-transparent text-secondary">Investor Relation</td>
            <td className="bg-transparent text-secondary">Jobs</td>
            <td className="bg-transparent text-secondary">Terms of use</td>
          </tr>
          <tr>
            <td className="bg-transparent text-secondary">Privacy</td>
            <td className="bg-transparent text-secondary">Legal notices</td>
            <td className="bg-transparent text-secondary">
              Cookie preferences
            </td>
            <td className="bg-transparent text-secondary">
              Corporate Information
            </td>
          </tr>
          <tr>
            <td className="bg-transparent text-secondary">Contact us</td>
          </tr>
          <tr>
            <td className="bg-transparent text-secondary">
              <button className="btn btn-transparent text-secondary h-auto">
                Service
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </footer>
  )
}

export default MyFooter
