import React from "react";
import "./Education.css"; // Import CSS for styling

const Education = () => (
  <div className="education-container">
    <h2>Education</h2>
    <div className="education-columns">
      <div className="education-item">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAw
          FBMVEX86lh0WKL87nL961ZzV6RwVaN0WaH/7lfjz4L55mf/7V5uUaL/7GK9pn2dhIX/9GlwVYloS4//7Gn
          /8WL+62+pk4JuUp2fiHnDrnpvU5nTv3agiYDbxYB3Wozo1Hro1HPx3m1tUYyDaoSJcIZ4XYnSvXvCrH7gy3mSe
          oO2oH6UfH+KcoB1Wpybg35jRZf242uCZ5SwmoCEbI/343/RvIN2W5V3XXl7YYTKtIycgpydhY+kjHS3oJfo1Gmr
          lY63oI86trqiAAAIQ0lEQVR4nO1aa5uqOBKWSUKEYLcCpgXloqJ4Q9TW4+70Ovv//9VWwBvo9HnsaZwzz+b9oJJA
          8lJVqapUrP32C6ImISEhISEhISEhISEhISEhISEhISEh8QlQ/pnjTveD7d9ITDcP9bqvGcV54LehBfFB01Gt1GGE
          fj0OjVp1tJDpdlf9vjechnphbuOwHnq71XAc6tfTIz1Yb5r9/qYbGFWxouG6RbCiYMIHPf2qw+hEnGCMiRPF+ez5h7
          n1OFZEh9cwj+r/Zk7IfIMpBFSFN/3z8MjotPJ2oOu59PISnT4+dbROrL4Z+vbMSVXJ8P00Ca17x6kBJArOD/jNSzt
          uufr9Yf8SUDon5zlAVmvryMpoM+UC0tWOirITnt8qPlQyM+kno3+VVLy8mlvBzih/dfQe4esOPs7MCr2u+XU77gefj
          /8lWB2mFlgN3sWrIxr3lUK713ullL5um8Xm00t8J9Dr9EpLKvBjiY0EKddRitO3ur36qNvCJVKdqklltHZbXXjseFEk
          pWC+i3ak3OhUYel0xNXSPFEgRBX+KBMQrummaXeowCfQICpPztvC+ViF1XeWZOmaTOwKSIGP5OW3Xwg7of6+xLZMKLv
          VrcAjZI6KF+dTyR4UiHRgq94hcmEEQn3Tqol+tyKBFQhzIXNSluENrX1YCSWAMS5MLoSTr8D6jbmVOPW3lShPAL0KkR
          Q0RTyIzHfMrQiyriYcZ6DxvrzW+SwFVvbkU1FFYWWUxArcFkWiglNcQ6yj/ubPWeFddcrLWJkvpRUI9hKDavSOc+Mvz8r
          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
          AAElFTkSuQmCC"
          alt="Wcoding Logo"
          className="school-logo"
        />
        <h3>Seoul, South Korea</h3>
        <p>Intensive Software Development</p>
        <p>Year: 2024</p>
      </div>
      <div className="education-item">
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wC
          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"
          alt="Hanyang University Logo"
          className="school-logo"
        />
        <h3>Hanyang University</h3>
        <p>MS in Korean Studies / International Relations</p>
        <p>Year: 2020 - 2022</p>
      </div>
      <div className="education-item">
        <img
          src="https://upload.wikimedia.org/wikipedia/fr/8/80/Logo_de_l%27Universit%C3%A9_de_Douala.png"
          alt="University of Douala Logo"
          className="school-logo"
        />
        <h3>University of Douala</h3>
        <p>BSc in Public Law</p>
        <p>Year: 2016 - 2019</p>
      </div>
    </div>
  </div>
);

export default Education;
