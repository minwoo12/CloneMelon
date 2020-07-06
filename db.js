import { Sequelize, DataTypes } from "sequelize";
import passportLocalSequelize from "passport-local-sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize("test", "root", process.env.DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
  logging: false
});

const handleDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to DB");
  } catch (error) {
    console.log(`Unable to Connected DB:${error}`);
  }
};

export const Music = sequelize.define(
  "Music",
  {
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fileUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    views: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: true
  }
);

export const Video = sequelize.define("Video", {
  fileUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  views: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  artist: {
    type: DataTypes.STRING,
    allowNull: false
  },
  time: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export const User = sequelize.define("User", {
  nickname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  kakaoId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

passportLocalSequelize.attachToUser(User, { usernameField: "email" });

User.sync();
Music.sync();
Video.sync();

handleDB();
