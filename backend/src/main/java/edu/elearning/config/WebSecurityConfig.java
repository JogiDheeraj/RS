package edu.elearning.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

import edu.elearning.service.AppUserDetailsService;

@Configurable
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private AppUserDetailsService appUserDetailsService;
	
	@Value("/${rest.api.base.path}")
	private String restApiBasePath;

	// This method is for overriding the default AuthenticationManagerBuilder.
	// We can specify how the user details are kept in the application.
	// It may be in a database, LDAP or in memory.
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(appUserDetailsService);
	}

	// This method is for overriding some configuration of the WebSecurity
	// If you want to ignore some request or request patterns then you can
	// specify that inside this method
	@Override
	public void configure(WebSecurity web) throws Exception {
		super.configure(web);
	}

	// This method is used for override HttpSecurity of the web Application.
	// We can specify our authorization criteria inside this method.
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			// enabling the basic authentication
			.httpBasic()
		.and()
			// starts authorizing configurations
			.authorizeRequests()
			// ignoring the guest's URLs
			.antMatchers(
					//static files
					"/*.ico",
					"/resources/**",
					"/assets/**",
					"/*.js",
					"/*.css",
					//frontend URLs
					"/",
					"/login",
					"/logout",
					"/register",
					//backend URLs
					restApiBasePath + "/account/login",
					restApiBasePath + "/account/register",
					restApiBasePath + "/account/ping"
				).permitAll()
			// authenticate all remaining URLs
		.anyRequest().authenticated()
		.and()
		
		// configuring the session on the server
		.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED).and()
		// disabling the CSRF - Cross Site Request Forgery
		.csrf().disable();
	}
}



