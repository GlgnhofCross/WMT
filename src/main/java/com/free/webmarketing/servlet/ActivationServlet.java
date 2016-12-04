package com.free.webmarketing.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.free.webmarketing.dto.User;
import com.free.webmarketing.exception.NotUniqueEmailException;
import com.free.webmarketing.exception.NotUniqueUserNameException;
import com.free.webmarketing.service.UserService;
import com.free.webmarketing.util.constant.Constants;

@WebServlet("/User/ActivationServlet")
public class ActivationServlet extends HttpServlet {

	private final static Logger logger = Logger.getLogger(ActivationServlet.class);

	private static final long serialVersionUID = 1L;

	private UserService userService;

	@Override
	public void init() throws ServletException {
		userService = new UserService();
		super.init();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String email = request.getParameter(Constants.EMAIL);
		String code = request.getParameter(Constants.code);

		String msg = Constants.ERROR;

		User user = null;
		try {
			user = userService.activate(email, code);
		} catch (NotUniqueUserNameException e) {
			logger.error(e);
		} catch (NotUniqueEmailException e) {
			logger.error(e);
		}

		if (user != null && user.getActive()) {
			request.getSession().setAttribute(Constants.USER, user);
			msg = Constants.activation;
		}
		response.sendRedirect("../" + Constants.INDEX + "?" + msg);
	}
}
