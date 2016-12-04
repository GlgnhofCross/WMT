package com.free.webmarketing.util;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import com.free.webmarketing.util.constant.Constants;

public class AppContextListener implements ServletContextListener {

	@Override
	public void contextInitialized(ServletContextEvent e) {
		DBConnectionManager.init();
		EmailManager.init();
		e.getServletContext().setAttribute("Constants", new Constants());
	}

	@Override
	public void contextDestroyed(ServletContextEvent e) {
		DBConnectionManager.cleanUp();
		EmailManager.close();
	}
}
