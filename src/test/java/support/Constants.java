package support;

import java.util.Properties;



public class Constants extends DriverBase{

	public static final Properties property = loadProperties();
	public static String WINDOWS_DRIVER_PATH = property.getProperty("windowsdriverpath");
	public static String URL = property.getProperty("url");
	public static String PAGELOAD_TIMEOUT = property.getProperty("pageloadtime");

}
