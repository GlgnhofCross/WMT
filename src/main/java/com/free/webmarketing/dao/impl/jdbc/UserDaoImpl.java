package com.free.webmarketing.dao.impl.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import org.apache.log4j.Logger;

import com.free.webmarketing.dao.UserDao;
import com.free.webmarketing.dao.base.BaseDaoImpl;
import com.free.webmarketing.dto.User;
import com.free.webmarketing.util.constant.DBEnum;

public class UserDaoImpl extends BaseDaoImpl implements UserDao {

	private final Logger logger = Logger.getLogger(UserDaoImpl.class);

	@Override
	public boolean addUser(Connection connection, User user) {
		PreparedStatement stmt = null;
		ResultSet rs = null;
		try {
			String generatedColumns[] = { "id" };

			stmt = connection.prepareStatement("INSERT INTO " + DBEnum.user + " ( " + DBEnum.User.email + " , "
					+ DBEnum.User.password + " , " + DBEnum.User.name + " )VALUES(?,?,?)", generatedColumns);

			stmt.setString(1, user.getEmail());
			stmt.setString(2, user.getPassword());
			stmt.setString(3, user.getName());
			int count = stmt.executeUpdate();

			try (ResultSet generatedKeys = stmt.getGeneratedKeys()) {

				if (generatedKeys.next()) {
					user.setId(generatedKeys.getInt(1));
				} else {
					throw new SQLException("Creating user failed, no ID obtained.");
				}
			}

			return count == 1;
		} catch (Exception e) {
			logger.error(e);
			return false;
		} finally {
			cleanUp(stmt, rs);
		}
	}

	public ArrayList<User> getAllUsers(Connection connection) {
		PreparedStatement stmt = null;
		ResultSet rs = null;
		ArrayList<User> users = new ArrayList<>();
		try {
			String sql = "SELECT * FROM " + DBEnum.user;

			stmt = connection.prepareStatement(sql);

			rs = stmt.executeQuery();

			while (rs.next()) {
				User user = new User();
				user.setId(rs.getInt(DBEnum.User.id));
				user.setEmail(rs.getString(DBEnum.User.email));
				user.setPassword(rs.getString(DBEnum.User.password));
				user.setName(rs.getString(DBEnum.User.name));
				user.setActive(rs.getBoolean(DBEnum.User.active));
				users.add(user);
			}
			return users;
		} catch (Exception e) {
			logger.error(e);
			return new ArrayList<>();
		} finally {
			cleanUp(stmt, rs);
		}
	}

	@Override
	public boolean isUsernameExits(Connection connection, String username) {
		// PreparedStatement stmt = null;
		// ResultSet rs = null;
		// try {
		// String sql = "SELECT id FROM " + DBEnum.user + " WHERE " +
		// DBEnum.User.userName + " = ?";
		//
		// stmt = connection.prepareStatement(sql);
		//
		// stmt.setString(1, username);
		//
		// rs = stmt.executeQuery();
		//
		// return rs.next();
		// } catch (Exception e) {
		// logger.error(e);
		// return false;
		// } finally {
		// cleanUp(stmt, rs);
		// }
		return false;
	}

	@Override
	public boolean isEmailExits(Connection connection, String email) {
		PreparedStatement stmt = null;
		ResultSet rs = null;
		try {
			String sql = "SELECT id FROM " + DBEnum.user + " WHERE " + DBEnum.User.email + " = ?";

			stmt = connection.prepareStatement(sql);

			stmt.setString(1, email);

			rs = stmt.executeQuery();

			return rs.next();
		} catch (Exception e) {
			logger.error(e);
			return false;
		} finally {
			cleanUp(stmt, rs);
		}
	}

	@Override
	public boolean isUsernameExits(Connection connection, String username, int id) {
		// PreparedStatement stmt = null;
		// ResultSet rs = null;
		// try {
		// String sql = "SELECT id FROM " + DBEnum.user + " WHERE " +
		// DBEnum.User.userName + " = ? and "
		// + DBEnum.User.id + " != ?";
		//
		// stmt = connection.prepareStatement(sql);
		//
		// stmt.setString(1, username);
		// stmt.setInt(2, id);
		//
		// rs = stmt.executeQuery();
		//
		// return rs.next();
		// } catch (Exception e) {
		// logger.error(e);
		// return false;
		// } finally {
		// cleanUp(stmt, rs);
		// }
		return false;
	}

	@Override
	public boolean isEmailExits(Connection connection, String email, int id) {

		PreparedStatement stmt = null;
		ResultSet rs = null;
		try {
			String sql = "SELECT id FROM " + DBEnum.user + " WHERE " + DBEnum.User.email + " = ? and " + DBEnum.User.id
					+ " != ?";

			stmt = connection.prepareStatement(sql);

			stmt.setString(1, email);
			stmt.setInt(2, id);

			rs = stmt.executeQuery();

			return rs.next();
		} catch (Exception e) {
			logger.error(e);
			return false;
		} finally {
			cleanUp(stmt, rs);
		}
	}

	@Override
	public User findUserByUsername(Connection connection, String username) {

		// PreparedStatement stmt = null;
		// ResultSet rs = null;
		// try {
		// String sql = "SELECT * FROM " + DBEnum.user + " WHERE " +
		// DBEnum.User.userName + " = ?";
		//
		// stmt = connection.prepareStatement(sql);
		//
		// stmt.setString(1, username);
		//
		// rs = stmt.executeQuery();
		//
		// User user = null;
		//
		// if (rs.next()) {
		// user = new User();
		// user.setId(rs.getInt(DBEnum.User.id));
		// user.setUsername(rs.getString(DBEnum.User.userName));
		// user.setEmail(rs.getString(DBEnum.User.email));
		// user.setPassword(rs.getString(DBEnum.User.password));
		// user.setSecurityAnswer(rs.getString(DBEnum.User.securityAnswer));
		// user.setSecurityQuestion(rs.getString(DBEnum.User.securityQuestion));
		// user.setSiteName(rs.getString(DBEnum.User.siteName));
		// user.setSiteNumber(rs.getString(DBEnum.User.siteNumber));
		// user.setActive(rs.getBoolean(DBEnum.User.active));
		// }
		//
		// return user;
		// } catch (Exception e) {
		// logger.error(e);
		// return null;
		// } finally {
		// cleanUp(stmt, rs);
		// }
		return null;
	}

	@Override
	public User findUserByEmail(Connection connection, String email) {

		PreparedStatement stmt = null;
		ResultSet rs = null;
		try {
			String sql = "SELECT * FROM " + DBEnum.user + " WHERE " + DBEnum.User.email + " = ?";

			stmt = connection.prepareStatement(sql);

			stmt.setString(1, email);

			rs = stmt.executeQuery();

			User user = null;

			if (rs.next()) {
				user = new User();
				user.setId(rs.getInt(DBEnum.User.id));
				user.setEmail(rs.getString(DBEnum.User.email));
				user.setPassword(rs.getString(DBEnum.User.password));
				user.setName(rs.getString(DBEnum.User.name));
				user.setActive(rs.getBoolean(DBEnum.User.active));
			}

			return user;
		} catch (Exception e) {
			logger.error(e);
			return null;
		} finally {
			cleanUp(stmt, rs);
		}
	}

	@Override
	public boolean updateUser(Connection connection, User user) {
		// PreparedStatement stmt = null;
		// try {
		// stmt = connection.prepareStatement("UPDATE " + DBEnum.user + " SET "
		// + DBEnum.User.securityAnswer
		// + " = ?, " + DBEnum.User.userName + " = ?, " + DBEnum.User.email + "
		// = ?, " + DBEnum.User.password
		// + " = ?, " + DBEnum.User.securityQuestion + " = ?, " +
		// DBEnum.User.siteName + " = ?, "
		// + DBEnum.User.siteNumber + " = ?, " + DBEnum.User.active + " = ?
		// WHERE id = ? ");
		//
		// stmt.setString(1, user.getSecurityAnswer());
		// stmt.setString(2, user.getUsername());
		// stmt.setString(3, user.getEmail());
		// stmt.setString(4, user.getPassword());
		// stmt.setString(5, user.getSecurityQuestion());
		// stmt.setString(6, user.getSiteName());
		// stmt.setString(7, user.getSiteNumber());
		// stmt.setBoolean(8, user.getActive());
		// stmt.setInt(9, user.getId());
		//
		// return stmt.executeUpdate() == 1;
		// } catch (Exception e) {
		// logger.error(e);
		// return false;
		// } finally {
		// cleanUp(stmt, null);
		// }
		return false;
	}

	@Override
	public boolean activeUnactiveUser(Connection connection, int userId, boolean stat) {
		PreparedStatement stmt = null;
		try {
			stmt = connection
					.prepareStatement("UPDATE " + DBEnum.user + " SET " + DBEnum.User.active + " = ? WHERE id = ? ");

			stmt.setBoolean(1, stat);
			stmt.setInt(2, userId);

			return stmt.executeUpdate() == 1;
		} catch (Exception e) {
			logger.error(e);
			return false;
		} finally {
			cleanUp(stmt, null);
		}
	}

	private void cleanUp(Statement stmt, ResultSet rs) {
		try {
			if (rs != null && !rs.isClosed())
				rs.close();
			if (stmt != null && !stmt.isClosed())
				stmt.close();
		} catch (Exception e) {
			logger.error(e);
		}
	}

}
